import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
    props: {
        varient: "primary" | "secondary" | "text";
        iconAfter?: React.ReactNode;
    }
        & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, varient, iconAfter, ...rest } = props;
    return (
        <button className={twMerge(" h-11 px-6 rounded-sm border border-red-orange-500 uppercase items-center inline-flex gap-2 transition duration-500 relative group/button",
            varient === "primary" && "bg-red-orange-500 text-white hover:text-stone-900",
            varient === "secondary" && "hover:bg-red-orange-500 hover:text-white",
            varient === "text" && "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:w-0 after:absolute after:top-full after:bg-red-orange-500 hover:after:w-full",
            className)}
            {...rest}
        >
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    );
};

export default Button;