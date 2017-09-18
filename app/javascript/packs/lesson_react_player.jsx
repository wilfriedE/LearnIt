import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactPlayer from 'react-player'

// Render component with data
$( document ).on('turbolinks:load', () => {
  const node = document.getElementById('lesson-player')
  const data = JSON.parse(node.getAttribute('data'))

  ReactDOM.render(<ReactPlayer {...data} />, node)
})
