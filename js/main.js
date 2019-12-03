import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Code example",
    'image': {
      'desc': "Code example",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "Product mgmt example",
    'image': {
      'desc': "Product management example",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181 `
    }
  },
  {
    'title': "Design example",
    'image': {
      'desc': "Design example",
      'src': "images/example2.png",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
