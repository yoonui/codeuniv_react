// props 객체를 받고, 그 객체의 onClick, text 요소들을 사용하고 있다
// 컴포넌트에서 props를 받는 가장 기본적인 방식
function Button({ text, onClick }){
    return <button onClick={onClick}>{text}</button>;
}

export default Button;