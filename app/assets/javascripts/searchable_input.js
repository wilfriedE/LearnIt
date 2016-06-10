/*

NOTE: Seachable Input should be primarily used for nested attributes. That's what it is relying on.
It also takes into consideration that cocoon is being used to handle the nested attributes.

Resources using Searchable Input to handle nested attributes should handle search queries at their resource path
*/
var searchmodal = "#searchable-input-modal";
var filterscontainer = "#searchable-input-filters";
var searchmodalbody = "#searchable-input-body";
var bulk_insert_btn = "#searchable-input-bulk-insert";

/**
input => cocoon generated item to be inserted
output => selector for where to output the finalized template
resource => Path to resource. A query will be made to this path to get *data
template => templating to be rendered in previews as well as output
|---------- expects {content: "content_here", values: ['name', 'description']}
|---------- :content => The mustach based template to be populated and rendered
|---------- :values => attributes to retrieve from *data to substitute into template
|---------------------  present accepts ['template_name/data_attribute', ...]
|---------------------  future possible ({'template_name' : 'data_attribute'})
|---------- by default the input is substituted into a {{{input}}} .
options => optional features
|---------- :filters => specific property filters for *data.
|----------------------- filters are sent as a parameter containing various filters
|----------------------- format looks like [display_name : {name : "topics",
|-----------------------                                     resource : "link"} ]
|----------------------- the :display_name is used to display on the Search Input modal
|----------------------- the name is the :name of field for the *data
|----------------------- if :resource is provided it creates a selectize based dropdown.
|----------------------- :name is then used for the selectize value as well for render.
|--------- :callback => a function that is called after the searchchable model inserts
|---------------------- finalized content.

NOTE: All variables are HTML-escaped by default. If you want to render unescaped HTML,
      use the triple mustache: {{{name}}}. You can also use & to unescape a variable.
*/
// Listen for filter changes
var searchable_input = function (input, output, resource, template={}, options={}) {
  $(searchmodal).modal();
  if (options["filters"] && options["filters"].length > 0) {
    $(filterscontainer).empty();
    $(filterscontainer).append("<li><strong>Filters : </strong></li");
    for (var i in options["filters"]) {
        var filter = options["filters"][i];
        var filter_label = "<li class='form-group form-inline filter'><label for='{{filter_name}}'>{{filter}}</label>";
        var filter_field = "<input class='form-control' type='text'  name='{{filter_name}}' id='filter-{{filter_name}}'></li>";
        var view = {
          "filter": Object.keys(filter)[0],
          "filter_name": filter[Object.keys(filter)[0]]["name"]
        };
        var content = filter_label + filter_field;
        $(filterscontainer).append(render_template(content, view));
    }
  }

  /**
  Creates a request url based on the search value and filters
  */
  function formulateRequestToResource() {
    var query = $("input#searchable-input-search").val();
    return resource + "?q="+query;
  }
  /**
  processes the filters and sends a specific filter
  */
  function getFilters() {
    var filter_query = {'filters': []};
    $(filterscontainer + " li.filter").each(function(){
        var filter_hash = {};
        filter_hash[$(this).find("input").attr("name")] = $(this).find("input").val();
        filter_query['filters'].push(filter_hash);
        //console.log(filter_query);
    });
    return filter_query;
  }
  function processRequest() {
    getUsingAjax(formulateRequestToResource(), getFilters()).then(
      function(response) {
        $(searchmodalbody).empty();
        var content = template['content'];
        var epoch_time =  (new Date).getTime();
        for (var i in response){
            var view = {};
            function formatInput(r_template) {
              epoch_time += 1;
              var ep = r_template.match(/\[([0-9]+)\]/);
              var r_template = replaceAll(r_template, ep[1], epoch_time);
              return r_template;
            }

            view['input'] = formatInput(input.html());
            var item = response[i];
            for( var attr_i in template['values']){
              var attribute = template['values'][attr_i];
              view[attribute] = item[attribute];
            };
            var checkbox = "<div class=\"checkbox\"><label><input class=\"item-selector\" value="+ item["id"] +" type=\"checkbox\"></label></div>";
            var add_btn = "<td><button class=\"btn btn-primary btn-sm btn-raised search_n_add\" ><i  class=\"material-icons\" >plus</i>ADD</button></td>"
            var itemrow = "<tr><td>" + checkbox +"</td><td class='search-field-item'><div data-id='"+ item["id"] +"' class='nested-fields'>" + render_template(content, view) +"</div></td>" + add_btn + "</tr>";
            $(searchmodalbody).append(itemrow);
        };
      }).then(function(){
        startSearchInputListeners();
      });
  };

  function render_template(content, view) {
    return Mustache.render(content, view);
  };

  function startSearchInputListeners() {
      $.material.init()
      $('.search_n_add').click(function(){
        var item_field = $(this).closest("tr").children(".search-field-item");
        $(output).prepend(item_field.children(".nested-fields"));
        $(this).closest("tr").remove();
        if (options["callback"]) {
          options["callback"]();
        }
      });
      $(bulk_insert_btn).click(function(){
        $(searchmodalbody + ' > tr').each(function(){
              if ($(this).find('.item-selector').is(':checked')) {
                  var item_field = $(this).children(".search-field-item");
                  $(output).prepend(item_field.children(".nested-fields"));
                  $(this).closest("tr").remove();
              };
        });
        if (options["callback"]) {
          options["callback"]();
        };
      });
      $("#searchable-input-submit").click(function(e){
        e.preventDefault();
        processRequest();
      });
  };

  processRequest();
};
