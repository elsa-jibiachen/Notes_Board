import React from "react";
import Draggable from "react-draggable";
import "./Note.css";

class NoteDraggable extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <Draggable
        axis="both"
        handle=".note"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
      >
        <div>
            <div className="note">
                <textarea 
                    className="note_text" 
                    defaultValue={text}/>
            </div>
        </div>
      </Draggable>
    );
  }
}

export default NoteDraggable;
