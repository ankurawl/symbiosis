import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myWorkTEST = [
  {
    'title': "TEST Code example",
    'image': {
      'desc': "TEST Code example",
      'src': "images/example1.png",
      'comment': ""
    }
  },
  {
    'title': "TEST Product mgmt example",
    'image': {
      'desc': "TEST Product management example",
      'src': "images/example3.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181 `
    }
  }
];



describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWorkTEST} />);

  it("Should be a section element", () => {
    // expect("Hello").toEqual("Hello");
    console.log(component.debug());
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWorkTEST.length);
  });

});


describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWorkTEST[1]} />);
  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.prop('src')).toEqual(myWorkTEST[1].image.src); 
  });

});
