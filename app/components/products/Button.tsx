interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    icon?: any;
    outline?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, icon, outline }) => {
    return (
        <button className="bg-white-500 hover:bg-slate-200 text-slate-800 border-2 font-bold py-2 px-4 rounded" onClick={onClick}>
            {icon ? (
                <span className="flex flex-cols items-center gap-2 ">
                    {icon && <span className="icon">{icon}</span>}
                    {label}
                </span>
            ) : (
                <span>
                    {label}
                </span>
            )}
        </button>
    );
};

export default Button;