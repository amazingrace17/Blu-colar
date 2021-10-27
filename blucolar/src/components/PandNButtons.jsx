

const PandNButtons = ({
    nextPag, prevPag, page
}) => {
    return (
         <>
            <button variant="primary" size="md" active onClick = {()=>prevPag()} disabled = {page === '1'}>
            Next
            </button>
            <button variant="secondary" size="lg" active onClick = {() => nextPag()}>
                Prev
            </button>
            
            </>
    )
   
  
}
export default PandNButtons;