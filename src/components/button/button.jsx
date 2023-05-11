import "./button.css";

const Button = ({
    bold = false,
    className = "",
    disabled = false,
    download = "",
    fit = false,
    hover = false,
    href = "",
    Icon,
    iconClassName = "",
    italic = false,
    onClick = () => {},
    primary = false,
    secondary = false,
    size = "", //small or large
    text = "",
    textClassName = "",
    thin = false,
    type = "button",
    uppercase = false,
}) => {
    const ButtonTag = href ? "a" : "button";

    const buttonAttr = ButtonTag === "button" 
        ? { type } 
        : { download, href };

    const textClassnames = [
        "text",
        bold && !thin ? "w600" : "",
        thin && !bold ? "w300" : "",
        uppercase ? "uppercase" : "",
        italic ? "i" : "",
        textClassName,
    ];

    const buttonClassnames = [
        "button",
        primary ? "primary" : "",
        secondary ? "secondary" : "",
        fit ? "fit-content" : "",
        hover ? "hover" : "",
        size,
        className,
    ]

    return (
        <ButtonTag 
            {...buttonAttr}
            className={buttonClassnames.join(" ")}
            disabled={disabled}
            onClick={onClick}
        >
            {!!Icon && (
                <Icon className={iconClassName} />
            )}

            <p className={textClassnames.join(" ")}>{text}</p>
        </ButtonTag>
    )
}

export default Button;