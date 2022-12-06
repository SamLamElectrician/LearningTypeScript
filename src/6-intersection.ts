type Draggable = {
	drag: () => void;
};

type Resizable = {
	resize: () => void;
};

//combines two types into one type using & operand
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};
