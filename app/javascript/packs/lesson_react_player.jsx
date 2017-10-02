import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

var ready = () => {
  const node = document.getElementById('lesson-player')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(<ReactPlayer {...data} />, node)
}

$(document).ready(ready);
$(document).on('turbolinks:load', ready);
