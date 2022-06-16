

const Alerta = ({children, tipo}) => {
    return (
        <div className={`alerta-container ${tipo}`}>
            <p className={`alerta-text `}>
                {children}
            </p>
        </div>
    )
}

export default Alerta