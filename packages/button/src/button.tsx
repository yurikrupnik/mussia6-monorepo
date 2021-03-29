import React from "react";

// import PropTypes from 'prop-types';
// import Bu from "@puzzle-mussia/button1";
import MuButton, { ButtonProps } from "@material-ui/core/Button";
// import { ButtonProps } from "@material-ui/core/Button";
import styles from "./button.module.scss";
// import styles from "./button.module.css";
// import styles from "./button.less";
// const styles = { root: "as" };

// interface User {
//   email: string;
//   password: string;
//   name: string;
//   projects: [];
// }

interface Props extends ButtonProps {
    text?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    data?: [];
    dataa?: [];
    lol?: [];
    // size?: "medium" | "large" | "small";
    // children: {}
}

// type Point = {
//     x: number;
//     y: number
// }
//
// interface Poin {
//     x:number;
//     y:number
// }
// interface Props {
//     text: string
//     onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
//     data: []
//     // children: {}
// }
// const aPoint:Point = {
//     x: 3,
//     y: 3
// }
//
// const a = ({x, y}:Poin) => {
//     return x + y
// }
// class Employee {
//     name: string;
//
//     constructor(name:string) {
//         this.name = name;
//     }
// }

// class User extends Employee {
//     age: number;
//
//     constructor(name:string, age: number) {
//         super(name);
//         this.age = age;
//     }
//     greet() {
//         return `Hello from ${this.name} is ${this.age} years old`
//     }
// }

const Button: React.FC<Props> = (props) => {
    // console.log('props', props.onClick)
    const { onClick, text, size } = props;

    // const [count, setCount] = useState<number | null>(5);
    //
    // setCount(null);
    // return <Bu data={[]} />;
    return (
        <MuButton size={size} className={styles.root} onClick={onClick}>
            {text}
        </MuButton>
    );
};

// Button.defaultProps = {
//     // children: null
// };
//
// Button.propTypes = {
//     // children: PropTypes.oneOfType([
//     //     PropTypes.node,
//     //     PropTypes.func,
//     //     PropTypes.string,
//     //     PropTypes.element
//     // ]),
//     // onClick: PropTypes.func.isRequired
// };

export default Button;
