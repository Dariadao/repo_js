class Button {
  constructor(type, width, height, color) {
    this.props = {
      type: "button",
      width: 100,
      height: 50,
      color: "green",
    };
  }

  onClick() {
    return console.log(this.props);
  }
}

const btn = new Button();

function testButton(btn) {
  console.log("Type:", btn.props.type === "button");
  console.log("Width:", btn.props.width === 100);
  console.log("Height:", btn.props.height === 50);
  console.log("Color:", btn.props.color === "green");
}
btn.onClick();
testButton(btn);
