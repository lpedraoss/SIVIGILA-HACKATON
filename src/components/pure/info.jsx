

const Info = () => {
    return (
        <>
            <div style={{ width: '600px', margin: '0 auto' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Análisis de datos de casos totales y eventos por departamento
                </h1>

                <p style={{ fontSize: '16px', lineHeight: '1.5', textAlign: 'justify', marginBottom: '20px' }}>
                    El análisis de los datos presentados muestra información sobre los casos totales y eventos relacionados con enfermedades en diferentes departamentos. Los datos se organizan en una tabla que incluye el nombre del departamento, el número de casos totales registrados y el tipo de evento asociado a esos casos.
                    {/* ... */}
                </p>
            </div>
            <div style={{ width: '600px', margin: '0 auto' }}>
                <p style={{ fontSize: '16px', lineHeight: '1.5', textAlign: 'justify', marginBottom: '20px' }}>
                    El análisis de los datos presentados muestra información sobre los casos totales y eventos relacionados con enfermedades en diferentes departamentos. Los datos se organizan en una tabla que incluye el nombre del departamento, el número de casos totales registrados y el tipo de evento asociado a esos casos.
                    <br />
                    <br />
                    Este análisis permite visualizar y comparar la incidencia de diferentes eventos en distintos departamentos. Al seleccionar un evento específico y un departamento en los dropdowns proporcionados, la tabla se filtra para mostrar únicamente los datos correspondientes a la combinación seleccionada.
                    <br />
                    <br />
                    Estos datos son valiosos para comprender la propagación de enfermedades en diferentes regiones y evaluar la efectividad de las medidas de prevención y control implementadas. Además, al observar las variaciones en los casos totales entre los departamentos, es posible identificar áreas de mayor riesgo y dirigir recursos y esfuerzos adicionales para abordar esas situaciones.
                    <br />
                    <br />
                    El análisis de estos datos contribuye a la toma de decisiones informadas en la gestión de la salud pública, permitiendo una mejor comprensión de los patrones y tendencias de enfermedades específicas en diferentes áreas geográficas.
                </p>
            </div>

        </>
    );
}

export default Info;
