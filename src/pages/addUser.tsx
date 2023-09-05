import React, { useState } from 'react';
import {
  Avatar,
  TextField,
  Container,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
} from '@mui/material';

const AddUser: React.FC<{}> = () => {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [userid, setuserid] = useState('');
  const [username, setUsername] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [icNumber, setIcNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');


  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setProfilePhoto(selectedFile);
    }
  };

  const handleSaveButtonClick = () => {
    const newUser = {
      profilePhotoUrl: profilePhoto ? URL.createObjectURL(profilePhoto) : '',
      userid,
      username,
      contactNumber,
      dateOfBirth,
      icNumber,
      email,
      address,
      gender,
    };

    const storedUsers = JSON.parse(localStorage.getItem('userList') || '[]');
    const updatedUsers = [...storedUsers, newUser];
    storedUsers.push(newUser);
    localStorage.setItem('userList', JSON.stringify(updatedUsers));
    setProfilePhoto(null);
    setuserid('');
    setUsername('');
    setContactNumber('');
    setDateOfBirth('');
    setIcNumber('');
    setEmail('');
    setAddress('');
    setGender('');
  };

  const saveHistory = () => {
    const searchHistoryArray = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const searchHistory = {
      promptKey: 'prompValue', 
      dateKey: 'dateValue',  
    };
    searchHistoryArray.push(searchHistory);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArray));
  };

  return (
    <Container maxWidth="sm">
      <div>
        <label htmlFor="profile-photo-input">
        <Avatar
            alt="Profile Photo"
            src={profilePhoto ? URL.createObjectURL(profilePhoto) : "/static/images/avatar/1.jpg"}
            sx={{ width: 64, height: 64, cursor: 'pointer' }}
        />
        </label>
        <input
          id="profile-photo-input"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </div>
      <div className="profileTextBox">
      <TextField
                id="standard-basic" className='useridTextBox' label="User ID :" variant="standard" required value={userid}
                onChange={(e) => setuserid(e.target.value)}/>

            <br></br>
          <TextField
                id="standard-basic" className='nameTextBox' label="Username :" variant="standard" required value={username}
                onChange={(e) => setUsername(e.target.value)}/>

            <br></br>

          <TextField 
                id="standard-basic" className='contactTextBox' label="Contact number :" variant="standard" required value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}/>

            <br></br>

            <TextField 
                id="standard-basic" className='DOBTextBox' label="Date of Birth :(DD/MM/YYYY)" variant="standard" required value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}/>

            <br></br>

            <TextField 
                id="standard-basic" className='icTextBox' label="IC number :" variant="standard" required value={icNumber}
                onChange={(e) => setIcNumber(e.target.value)}/>

            <br></br>

            <TextField 
                id="standard-basic" className='emailTextBox' label="Email :" variant="standard" required value={email}
                onChange={(e) => setEmail(e.target.value)}/>

            <br></br>

            <TextField 
                id="standard-basic" className='addressTextBox' label="House Address :" variant="standard" required value={address}
                onChange={(e) => setAddress(e.target.value)}/>

            <br></br>

      </div>
      <div>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button variant="contained" onClick={handleSaveButtonClick}>
        Add User
      </Button>
    </Container>
  );
};
export default AddUser;