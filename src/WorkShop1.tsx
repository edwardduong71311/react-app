import './index-workshop1.css';
import Header from "./components/workshop1/Header";
import Options from "./components/workshop1/Options";
import Footer from "./components/workshop1/Footer";
import TodoContext from "./components/workshop1/TodoContext";

export default function WorkShop1() {
    return (
        <TodoContext>
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header/>
                    <Options/>
                    <Footer/>
                </div>
            </div>
        </TodoContext>
    );
}