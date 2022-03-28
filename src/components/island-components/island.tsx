import {Col, Row} from "antd";
import './island.less';

type islandsArray = number[][]

const Island = () => {
let mapArray:islandsArray = []
let islands = 0;

  let getRandomInt = (max:number) => {
    return Math.floor(Math.random() * max);
  }

  let createIsland = (grids:number) => {
    while (mapArray.length != grids) {
      let island = [];
      while (island.length !== 5){
        let randomNumber = Number();
        randomNumber = getRandomInt(2);
        island.push(randomNumber);
      }
      mapArray.push(island);
      island = [];
    }
  }

  let checkIslandsAmount = (array:islandsArray) => {
    let isIslandsActive:boolean;
    array.forEach((children, index) => {
      let previousLand: number[] = [];
      children.forEach((item, index) => {
        if(previousLand.length === 0) {
          let itemIndex = children.filter((item, index) => {
            if (item === 1) {
              previousLand.push(index);
            }
          })
        }
        else {
            if(item === 1){
              if(previousLand.some(item => item === index)){
                isIslandsActive = true;
              }
            }
            previousLand = [];
            let itemIndex = children.filter((item, index) => {
            if (item === 1) {
              previousLand.push(index);
            }
          })
        }
      })
      isIslandsActive && islands++
    })
  }
  createIsland(5)
  checkIslandsAmount(mapArray);

  return (
    <Row justify={'center'} className={'island-row'}>
      <Col span={24} className={'container'}>
        <Row className={'island-count'} justify={'center'}>
          <Col span={6}>
            Islands amount is: {islands}
          </Col>
        </Row>
        {mapArray.map((item, index) => (
          <Row key={index} className={'map'} justify={'center'}>
          {item.map((it, index, array) => {
            if(it === 1){
              return <Col className={'island'} style={{backgroundColor: '#AFE1AF'}} key={index} span={24/item.length}>{it}</Col>
            }
            else if (it === 0){
              return <Col className={'water'} style={{backgroundColor: '#87CEEB'}} key={index}  span={24/item.length}>{it}</Col>
            }
          })}
          </Row>
          ))}
      </Col>
    </Row>
  )
}

export default Island;