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
        <button className={twMerge(" h-11 px-6 rounded-xl border border-red-orange-500 uppercase items-center inline-flex gap-2",
            varient === "primary" && "bg-red-orange-500 text-white",
            varient === "secondary" && "",
            varient === "text" && "h-auto px-0 border-transparent",
            className)}
            {...rest}
        >
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    );
};

export default Button;