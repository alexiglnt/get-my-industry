const Icon = (props) => {

    const iconStyle = {
        fontSize: '35px',
        color: props.color,
    }

    return (
      <span className="material-symbols-outlined" style={iconStyle} > {props.name} </span>
    );
}

export default Icon;