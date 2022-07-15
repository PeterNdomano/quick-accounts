import React from 'react';

export default function Component(props) {

  return (
    <div>
      {/* modal */}
      <div className="modal fade" id="modal" tabIndex="-1" role="dialog" aria-labelledby="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content z-depth-1-half">
            <div className="modal-header">
              <h5 style={{ color:"var(--accentColor)" }} className="modal-title font-bold" id="exampleModalLongTitle">{props.title}</h5>
              <button id="modalCloser" type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" style={{ color: "var(--darkColor)"}}><MdClose size={24} color="var(--secondaryColor)"/></span>
              </button>
            </div>
            <div className="modal-body">
              {props.view}
            </div>
          </div>
        </div>
      </div>
      {/* modal end*/}
    </div>
  );
}
