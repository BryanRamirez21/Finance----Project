import { usePages } from '../hooks/usePages';

export const HalfSizeCard = ({card}) => {

    const {pageDetails} = usePages(card);
    
    if(!pageDetails){
        return (
            <div className="col-md-6" style={{minHeight: "25rem"}}>
                <div className="card p-4 shadow-sm h-100">
                    <p>Page not found.</p>
                </div>
            </div>
        );
    }

    const {title, page: PageComponent} = pageDetails;
    
    return (
        <div className="col-md-6" style={{minHeight: "25rem"}}>
            <div className="card p-4 shadow-sm h-100">
                <h4 className="mb-3">{title}</h4>
                <div className='d-flex flex-column h-100 justify-content-center'>
                    <PageComponent title={title}/>
                </div>
                
            </div>
        </div>
    )
}
