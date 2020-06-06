import React from 'react';


// Interface que provem uma propriedade para o Header e o tipo da mesma
interface HeaderProps {
    title: string;
};


// Estou utilizando generics para forçar uma propriedade e tambem com o tipo string
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;