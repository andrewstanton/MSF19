import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Portal } from "../../utilities"

export class Modal extends Component {
  render() {
    const { toggle, on } = this.props
    return on ? (
      <Portal>
        <div className="modal">
          <div className="modal_window">
            <div className="modal_close">
              <button className="button button--link" onClick={toggle}>
                <FontAwesomeIcon icon="times" />
              </button>
            </div>
            {this.props.children}
          </div>
        </div>
      </Portal>
    ) : null
  }
}
