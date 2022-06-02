export default function Form() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          city: event.target.city.value,
          countryCode: event.target.countryCode.value,
        }
        console.log(data);
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
    
        // API endpoint where we send form data.
        const endpoint = '/api/form'
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: 'POST',
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        console.log(result);
      }

    return (
        <form onSubmit={ handleSubmit } action="/api/form" method="post" className='flex flex-col justify-center'>
            <label className='font-medium' htmlFor="city">City</label>
            <input 
                className='rounded-md' 
                id="city"
                name="city" 
                type="text" 
                required 
                minLength={1} 
                maxLength={30} 
                />
            <label className='font-medium' htmlFor="countryCode">Country Code</label>
            <input 
                className='rounded-md' 
                id="countryCode"
                name="countryCode" 
                type="text" 
                required 
                minLength={1} 
                maxLength={30} 
                />
            <div className='flex justify-center my-2'>
                <button type="submit" className='bg-gray-200 hover:bg-gray-300 rounded-md w-1/2'>Submit</button>
            </div>
        </form>
    )
}