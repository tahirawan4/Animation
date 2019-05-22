import React, { Component } from "react";
import { Arrow, Shape } from "react-konva";

class ATTENArrow extends Component {
  render() {
    return (
      <Arrow
        x={223}
        y={425}
        points={[0, 0, 20, -15]}
        pointerLength={5}
        pointerWidth={5}
        fill={'black'}
        stroke={'black'}
        strokeWidth={2}
      />
    );
  }
}

class GND extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(830, 120);
          context.lineTo(850, 120);
          context.moveTo(850, 120);
          context.lineTo(850, 130);
          context.moveTo(850, 130);
          context.lineTo(855, 135);
          context.moveTo(855, 135);
          context.lineTo(845, 140);
          context.moveTo(845, 140);
          context.lineTo(855, 145);
          context.moveTo(855, 145);
          context.lineTo(845, 150);
          context.moveTo(845, 150);
          context.lineTo(850, 155);
          context.moveTo(850, 155);
          context.lineTo(850, 165);
          context.moveTo(845, 165);
          context.lineTo(855, 165);
          context.fillStrokeShape(shape);
        }}
        fill={'black'}
        stroke={'black'}
        strokeWidth={1}
      />
    );
  }
}

class ATTENBoxShape extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          // left side
          context.moveTo(218, 430);
          context.lineTo(218, 427);
          context.moveTo(214, 424);
          context.lineTo(218, 427);
          context.moveTo(222, 421);
          context.lineTo(214, 424);
          context.moveTo(214, 418);
          context.lineTo(222, 421);
          context.moveTo(222, 415);
          context.lineTo(214, 418);
          context.moveTo(214, 412);
          context.lineTo(222, 415);
          context.moveTo(222, 409);
          context.lineTo(214, 412);
          context.moveTo(214, 406);
          context.lineTo(222, 409);
          // left corner
          context.moveTo(219, 404);
          context.lineTo(214, 406);
          context.moveTo(218, 400);
          context.lineTo(218, 404);
          context.moveTo(222, 400);
          context.lineTo(218, 400);
          // top
          context.moveTo(225, 403);
          context.lineTo(222, 400);
          context.moveTo(228, 398);
          context.lineTo(225, 403);
          context.moveTo(231, 403);
          context.lineTo(228, 398);
          context.moveTo(234, 398);
          context.lineTo(231, 403);
          context.moveTo(237, 403);
          context.lineTo(234, 398);
          context.moveTo(240, 398);
          context.lineTo(237, 403);
          context.moveTo(243, 403);
          context.lineTo(240, 398);
          context.moveTo(246, 398);
          context.lineTo(243, 403);
          context.moveTo(249, 401);
          context.lineTo(246, 398);
          context.moveTo(249, 401);
          context.lineTo(252, 401);
          // right side
          context.moveTo(252, 430);
          context.lineTo(252, 427);
          context.moveTo(248, 424);
          context.lineTo(252, 427);
          context.moveTo(256, 421);
          context.lineTo(248, 424);
          context.moveTo(248, 418);
          context.lineTo(256, 421);
          context.moveTo(256, 415);
          context.lineTo(248, 418);
          context.moveTo(248, 412);
          context.lineTo(256, 415);
          context.moveTo(256, 409);
          context.lineTo(248, 412);
          context.moveTo(252, 406);
          context.lineTo(256, 409);
          context.moveTo(252, 406);
          context.lineTo(252, 401);
          context.fillStrokeShape(shape);
        }}
        fill={'black'}
        stroke={'black'}
        strokeWidth={1}
      />
    );
  }
}

class BaseFork extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(75, 115);
          context.lineTo(90, 115);
          context.moveTo(65, 107);
          context.lineTo(75, 115);
          context.moveTo(65, 123);
          context.lineTo(75, 115);
          context.fillStrokeShape(shape);
        }}
        fill={'red'}
        stroke={'red'}
        strokeWidth={1}
      />
    );
  }
}

class TopFork extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(940, 420);
          context.lineTo(950, 420);
          context.moveTo(960, 412);
          context.lineTo(950, 420);
          context.moveTo(960, 428);
          context.lineTo(950, 420);
          context.fillStrokeShape(shape);
        }}
        fill={'red'}
        stroke={'red'}
        strokeWidth={1}
      />
    );
  }
}

class UpperTestFork extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(720, 117);
          context.lineTo(720, 140);
          context.moveTo(712, 118);
          context.lineTo(728, 118);
          context.moveTo(712, 150);
          context.lineTo(720, 140);
          context.moveTo(728, 150);
          context.lineTo(720, 140);
          context.fillStrokeShape(shape);
        }}
        fill={'red'}
        stroke={'red'}
        strokeWidth={1}
      />
    );
  }
}

class LowerTestFork extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(940, 490);
          context.lineTo(950, 490);
          context.moveTo(960, 482);
          context.lineTo(950, 490);
          context.moveTo(960, 498);
          context.lineTo(950, 490);
          context.fillStrokeShape(shape);
        }}
        fill={'red'}
        stroke={'red'}
        strokeWidth={1}
      />
    );
  }
}

class FrontPanelFork extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(940, 460);
          context.lineTo(950, 460);
          context.moveTo(960, 452);
          context.lineTo(950, 460);
          context.moveTo(960, 468);
          context.lineTo(950, 460);
          context.fillStrokeShape(shape);
        }}
        fill={'red'}
        stroke={'red'}
        strokeWidth={1}
      />
    );
  }
}

class GroundFork extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(900, 110);
          context.lineTo(910, 110);
          context.moveTo(920, 102);
          context.lineTo(910, 110);
          context.moveTo(920, 118);
          context.lineTo(910, 110);
          context.moveTo(920, 110);
          context.lineTo(930, 102);
          context.moveTo(920, 110);
          context.lineTo(930, 118);
          context.fillStrokeShape(shape);
        }}
        fill={'red'}
        stroke={'red'}
        strokeWidth={1}
      />
    );
  }
}

class SplitterForks extends Component {
  render() {
    return (
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          // fork-1
          context.moveTo(90, 387);
          context.lineTo(100, 387);
          context.moveTo(83, 383);
          context.lineTo(90, 387);
          context.moveTo(83, 391);
          context.lineTo(90, 387);
          // fork-2
          context.moveTo(90, 395);
          context.lineTo(100, 395);
          context.moveTo(83, 391);
          context.lineTo(90, 395);
          context.moveTo(83, 399);
          context.lineTo(90, 395);
          // fork-3
          context.moveTo(90, 403);
          context.lineTo(100, 403);
          context.moveTo(83, 399);
          context.lineTo(90, 403);
          context.moveTo(83, 407);
          context.lineTo(90, 403);
          // fork-4
          context.moveTo(90, 411);
          context.lineTo(100, 411);
          context.moveTo(83, 407);
          context.lineTo(90, 411);
          context.moveTo(83, 415);
          context.lineTo(90, 411);
          // fork-5
          context.moveTo(90, 419);
          context.lineTo(100, 419);
          context.moveTo(83, 415);
          context.lineTo(90, 419);
          context.moveTo(83, 423);
          context.lineTo(90, 419);
          // fork-6
          context.moveTo(90, 427);
          context.lineTo(100, 427);
          context.moveTo(83, 423);
          context.lineTo(90, 427);
          context.moveTo(83, 431);
          context.lineTo(90, 427);
          // fork-7
          context.moveTo(90, 435);
          context.lineTo(100, 435);
          context.moveTo(83, 431);
          context.lineTo(90, 435);
          context.moveTo(83, 439);
          context.lineTo(90, 435);
          // fork-8
          context.moveTo(90, 443);
          context.lineTo(100, 443);
          context.moveTo(83, 439);
          context.lineTo(90, 443);
          context.moveTo(83, 447);
          context.lineTo(90, 443);
          context.fillStrokeShape(shape);
        }}
        fill={'blue'}
        stroke={'blue'}
        strokeWidth={1}
      />
    );
  }
}


export {
  GND,
  ATTENBoxShape,
  ATTENArrow,
  BaseFork,
  TopFork,
  UpperTestFork,
  LowerTestFork,
  FrontPanelFork,
  GroundFork,
  SplitterForks,
};
