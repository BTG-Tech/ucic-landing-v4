import React, { Component } from 'react'

export class EmbedSocialWidget extends Component {
  render() {
    return (
      <div className="embedsocial-hashtag" data-ref={ this.props.refId }></div>
    );
  }


  componentDidMount(){
    (function (d, s, id ){
        var js;
        if( d.getElementById( id )) {
            return;
        }
        js = d.createElement( s );
        js.id = id;
        js.src = "https://embedsocial.com/embedscript/ri.js";
        d.getElementByTagName("head")[0].appendChild(js);
    })( document, "script", "EmbedSocialReviewScript");
    console.log(document)
  }
}

export default EmbedSocialWidget