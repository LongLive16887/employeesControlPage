import './app-info.css';


const AppInfo = ({countEmployees,countIncreases}) => {
    return(
        <div className="app-info">
            <h1>Учёт сотрудников в компании</h1>
            <h2>Общее число сотрудников: {countEmployees} </h2>
            <h2>Премиу получат: {countIncreases}</h2>
        </div>
    );
}


export default AppInfo;