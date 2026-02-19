export interface CardsBlock {
    id: number;
    img?: string;
    title: string;
    className: string;
    position?: string | string[];
    registryNumber?: string;
    description?: string;
}

export const CompositionBlock = ({block}: {block: CardsBlock}) => {
    return (
        <div className={block.className}>
            {block.id === 1 && (
                <>
                    <div className='block-numeration'>
                        <div className='numeration'>1</div>
                        <div className='numeration numeration-addition'>{block.position}</div>
                    </div>
                    <h3 className='sectionComposition-title'>{block.title}</h3>
                    <img className="multirouter-img" src={block.img}/>
                    <p className='sectionMonitoring_text'>{block.description}</p>
                </>
            )}
            {block.id === 2 && (
                <>
                    <div>
                        <div className='block-numeration'>
                            <div className='numeration'>2</div>
                            <div className='numeration numeration-addition'>в дата центре</div>
                            <span className='numeration-span'>или</span>
                            <div className='numeration numeration-addition'>у клиента</div>
                        </div>
                        <h3 className='sectionComposition-title'>{block.title}</h3>
                        <h4 className='sectionComposition-h4'>{block.registryNumber}</h4>
                    </div>
                    <div>
                        <p className='sectionMonitoring_text'>
                            Обеспечивает передачу данных с Мультироутера с использованием одновременно всех подключенных каналов до «суммирующего сервера» и обратно. Суммирующий сервер можно установить на ресурсах клиента.
                        </p>
                        <p className='sectionMonitoring_text'>
                            <a className='sectionMonitoring_text sectionComposition-link'>Функциональные характеристики ПО «Бондинг»</a>
                        </p>
                        <p className='sectionMonitoring_text'>
                            Цены на ПО «Бондинг» рассчитываются индивидуально под клиента. Для запроса цены <a className='sectionMonitoring_text sectionComposition-link'>оставьте заявку</a>
                        </p>
                    </div>
                </>
            )}
            {block.id === 3 && (
                <>
                    <div>
                        <div className='block-numeration'>
                            <div className='numeration'>3</div>
                            <div className='numeration numeration-addition'>{block.position}</div>
                        </div>
                        <h3 className='sectionComposition-title'>{block.title}</h3>
                        <h4 className='sectionComposition-h4'>{block.registryNumber}</h4>
                    </div>
                    <div>
                        <p className='sectionMonitoring_text'>
                        Web-интерфейс с дашбордом для мониторинга и удаленного управления мультироутеров mrnet и настройки сети.
                        </p>
                        <p className='sectionMonitoring_text'>
                            <a className='sectionMonitoring_text sectionComposition-link'>Функциональные характеристики ПО «Платформа управления сетевыми устройствами»</a>
                        </p>
                        <p className='sectionMonitoring_text'>
                            Цены на ПО «Платформа управления сетевыми устройствами» рассчитываются индивидуально под клиента. Для запроса цены <a className='sectionMonitoring_text sectionComposition-link'>оставьте заявку</a>
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}