import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import "./SearchBox.css"

function SearchBox() {
    return (
        <div className='SearchBox'>
            <h1>Search for the weather</h1>
            <form action="">
                <TextField id="city" label="City name" variant="outlined" />
                <br /> <br />
                <Button variant="contained" type="submit">Search</Button>

            </form>
        </div>
    );
}

export default SearchBox;
