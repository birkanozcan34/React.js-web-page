import React, { Component } from 'react'

export class hakkimda extends Component {
  render() {
    return (
        <div id="hakkimda">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/birkan.jpg" title="Birkan ÖZCAN" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="hakkimda-text">
                <h2>Hakkımda</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <h3>Kullandığım Teknolojiler?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <ul>
                      {this.props.data ? this.props.data.bigo.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-6">
                    <ul>
                    {this.props.data ? this.props.data.bigo2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default hakkimda
