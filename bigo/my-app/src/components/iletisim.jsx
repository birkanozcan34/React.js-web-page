import React, { Component } from "react";

export class iletisim extends Component {
  render() {
    return (
      <div>
        <div id="iletisim">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Temasta Olmak İçin</h2>
                  <p>
                  Bana bir e-posta göndermek için lütfen aşağıdaki formu doldurun en kısa sürede size geri döneceğim.
                  </p>
                </div>
                <form name="sentMessage" id="iletisimForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="İsim"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Mesaj"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 iletisim-info">
              <div className="iletisim-item">
                <h3>iletişim</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Adres
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="iletisim-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefon
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="iletisim-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
         
                    <li>
                      <a href={this.props.data ? this.props.data.linkedin : "/"}>
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 By Design{" "}
              <a href="http://www.birkanozcan.com" rel="nofollow">
                Birkan ÖZCAN
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default iletisim;
