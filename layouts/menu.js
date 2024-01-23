import React, { Component } from "react";
import Hiragana_QA from "../components/hiragana";
import ML_box from "../components/ml"

export function Menu({ menuList = [] }) {
  // console.log("menu_list:", menu_list);
  return (
    <div className="text-2xl bg-gray-700 p-4 flex items-center justify-center">
      <ul className="flex space-x-4">
        {menuList.map(function (list, index) {
          return (
            <li className="underline text-white hover:text-gray-300 cursor-pointer">
              {list}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// function component version -> 遺棄
const Navbar = ( menuList = [] ) => {
    const [init, setInit] = React.useState(true);
    const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSelectedFile = (components) => {

    }

    const menu = (menuList) => {
        <div className="text-2xl bg-gray-700 p-4 flex items-center justify-center">
          <ul className="flex space-x-4">
            {menuList.map(function (list, index) {
              return (
                <li className="underline text-white hover:text-gray-300 cursor-pointer">
                  {list}
                </li>
              );
            })}
          </ul>
        </div>;
      }

    return (
        <div></div>
    );
}

// class component version: using React State -> 硬做
export default class NavbarComponent extends Component {
  constructor() {
    super();

    this.menuList = ["平假名", "片假名", "ML 辨識相關"];
    this.menuListPage = [<Hiragana_QA/>, <div></div>, <ML_box/>];

    this.state = {
        selectedListIdx: 0,
    };
  }

  selectPage = (index) => {
    this.setState({selectedListIdx: index});
  };

  menu = () => {
    return (
        <div className="text-2xl bg-gray-700 p-4 flex items-center justify-center">
            <ul className="flex space-x-4">
                {this.menuList.map( (list, index) => { // function (list, index) // 會出錯
                    return (
                        <li className="underline text-white hover:text-gray-300 cursor-pointer" 
                            onClick={() => this.selectPage(index)}>
                            {list}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
  }

  render() {
    return (
        /* {menu()} 會出錯 && {...}; 會多出標點符號*/
        <div>
            {this.menu()}
            {this.menuListPage[this.state.selectedListIdx]}
        </div>
    );
  }
}

// using React router: https://reactrouter.com/en/main/hooks/use-href
export class NavbarRouter extends Component {

}