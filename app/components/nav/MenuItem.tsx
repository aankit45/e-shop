interface MenuItemProps {
    children: React.ReactNode;
    onclick: () => void
}

const MenuItem:React.FC<MenuItemProps> = ({children,onclick}) => {
    return ( 
        <div onClick={onclick} className="px-4 py-3 transition">
            {children}
        </div>
     );
}

export default MenuItem;