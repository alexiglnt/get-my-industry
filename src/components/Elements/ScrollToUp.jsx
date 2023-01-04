import '../../css/ScrollToUp.scoped.css';
import Icon from './Icon';

function ScrollToUp() {

    // STYLE
    const btnStyle = {
        position : 'fixed',
        bottom : '20px',
        right : '20px',
        borderRadius : '3em'
    }

    // FUNCTION
    function ToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    }

    // RENDER
    return (
        <>
            <button type="button" style={btnStyle} onClick={ToTop} > 
                <Icon name="arrow_upward" />
            </button>
        </>
    );
}

export default ScrollToUp;