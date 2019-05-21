import React, { Component } from "react";
import { Arrow, Shape } from "react-konva";

class ATTENArrow extends Component {
  render() {
    return (
      <Arrow
        x={313}
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
          context.moveTo(920, 120);
          context.lineTo(950, 120);
          context.moveTo(950, 120);
          context.lineTo(950, 130);
          context.moveTo(950, 130);
          context.lineTo(955, 135);
          context.moveTo(955, 135);
          context.lineTo(945, 140);
          context.moveTo(945, 140);
          context.lineTo(955, 145);
          context.moveTo(955, 145);
          context.lineTo(945, 150);
          context.moveTo(945, 150);
          context.lineTo(950, 155);
          context.moveTo(950, 155);
          context.lineTo(950, 165);
          context.moveTo(945, 165);
          context.lineTo(955, 165);
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
          context.moveTo(308, 430);
          context.lineTo(308, 427);
          context.moveTo(304, 424);
          context.lineTo(308, 427);
          context.moveTo(312, 421);
          context.lineTo(304, 424);
          context.moveTo(304, 418);
          context.lineTo(312, 421);
          context.moveTo(312, 415);
          context.lineTo(304, 418);
          context.moveTo(304, 412);
          context.lineTo(312, 415);
          context.moveTo(312, 409);
          context.lineTo(304, 412);
          context.moveTo(304, 406);
          context.lineTo(312, 409);
          // left corner
          context.moveTo(309, 404);
          context.lineTo(304, 406);
          context.moveTo(308, 400);
          context.lineTo(308, 404);
          context.moveTo(312, 400);
          context.lineTo(308, 400);
          // top
          context.moveTo(315, 403);
          context.lineTo(312, 400);
          context.moveTo(318, 398);
          context.lineTo(315, 403);
          context.moveTo(321, 403);
          context.lineTo(318, 398);
          context.moveTo(324, 398);
          context.lineTo(321, 403);
          context.moveTo(327, 403);
          context.lineTo(324, 398);
          context.moveTo(330, 398);
          context.lineTo(327, 403);
          context.moveTo(333, 403);
          context.lineTo(330, 398);
          context.moveTo(336, 398);
          context.lineTo(333, 403);
          context.moveTo(339, 401);
          context.lineTo(336, 398);
          context.moveTo(339, 401);
          context.lineTo(342, 401);
          // right side
          context.moveTo(342, 430);
          context.lineTo(342, 427);
          context.moveTo(338, 424);
          context.lineTo(342, 427);
          context.moveTo(346, 421);
          context.lineTo(338, 424);
          context.moveTo(338, 418);
          context.lineTo(346, 421);
          context.moveTo(346, 415);
          context.lineTo(338, 418);
          context.moveTo(338, 412);
          context.lineTo(346, 415);
          context.moveTo(346, 409);
          context.lineTo(338, 412);
          context.moveTo(342, 406);
          context.lineTo(346, 409);
          context.moveTo(342, 406);
          context.lineTo(342, 401);
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
          context.moveTo(175, 115);
          context.lineTo(190, 115);
          context.moveTo(165, 107);
          context.lineTo(175, 115);
          context.moveTo(165, 123);
          context.lineTo(175, 115);
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
          context.moveTo(1010, 420);
          context.lineTo(1020, 420);
          context.moveTo(1030, 412);
          context.lineTo(1020, 420);
          context.moveTo(1030, 428);
          context.lineTo(1020, 420);
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
          context.moveTo(820, 117);
          context.lineTo(820, 140);
          context.moveTo(812, 118);
          context.lineTo(828, 118);
          context.moveTo(812, 150);
          context.lineTo(820, 140);
          context.moveTo(828, 150);
          context.lineTo(820, 140);
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
          context.moveTo(1010, 490);
          context.lineTo(1020, 490);
          context.moveTo(1030, 482);
          context.lineTo(1020, 490);
          context.moveTo(1030, 498);
          context.lineTo(1020, 490);
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
          context.moveTo(1010, 460);
          context.lineTo(1020, 460);
          context.moveTo(1030, 452);
          context.lineTo(1020, 460);
          context.moveTo(1030, 468);
          context.lineTo(1020, 460);
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
          context.moveTo(990, 110);
          context.lineTo(1000, 110);
          context.moveTo(1010, 102);
          context.lineTo(1000, 110);
          context.moveTo(1010, 118);
          context.lineTo(1000, 110);
          context.moveTo(1010, 110);
          context.lineTo(1020, 102);
          context.moveTo(1010, 110);
          context.lineTo(1020, 118);
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
          context.moveTo(190, 387);
          context.lineTo(200, 387);
          context.moveTo(183, 383);
          context.lineTo(190, 387);
          context.moveTo(183, 391);
          context.lineTo(190, 387);
          // fork-2
          context.moveTo(190, 395);
          context.lineTo(200, 395);
          context.moveTo(183, 391);
          context.lineTo(190, 395);
          context.moveTo(183, 399);
          context.lineTo(190, 395);
          // fork-3
          context.moveTo(190, 403);
          context.lineTo(200, 403);
          context.moveTo(183, 399);
          context.lineTo(190, 403);
          context.moveTo(183, 407);
          context.lineTo(190, 403);
          // fork-4
          context.moveTo(190, 411);
          context.lineTo(200, 411);
          context.moveTo(183, 407);
          context.lineTo(190, 411);
          context.moveTo(183, 415);
          context.lineTo(190, 411);
          // fork-5
          context.moveTo(190, 419);
          context.lineTo(200, 419);
          context.moveTo(183, 415);
          context.lineTo(190, 419);
          context.moveTo(183, 423);
          context.lineTo(190, 419);
          // fork-6
          context.moveTo(190, 427);
          context.lineTo(200, 427);
          context.moveTo(183, 423);
          context.lineTo(190, 427);
          context.moveTo(183, 431);
          context.lineTo(190, 427);
          // fork-7
          context.moveTo(190, 435);
          context.lineTo(200, 435);
          context.moveTo(183, 431);
          context.lineTo(190, 435);
          context.moveTo(183, 439);
          context.lineTo(190, 435);
          // fork-8
          context.moveTo(190, 443);
          context.lineTo(200, 443);
          context.moveTo(183, 439);
          context.lineTo(190, 443);
          context.moveTo(183, 447);
          context.lineTo(190, 443);
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
