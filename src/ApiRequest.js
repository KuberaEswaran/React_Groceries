const ApiRequest=async (url='',optionsObj=null,errMsg=null)=>{
    try{
        const response=await fetch(url,optionsObj)
        
        if(!response.ok) throw Error(`Please Reload the page:`)
    }
    catch(err){
        errMsg=err.message
    }
    finally{
        return errMsg
    }
}

export default ApiRequest