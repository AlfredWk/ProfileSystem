import React, { useState, useEffect } from "react";
import {
    TextField,
    Container,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    Button,
} from "@mui/material";
// import { DataGridDemo } from "./listOfUser";
import { useLocation, useNavigate } from "react-router-dom";

const EditMyProfile: React.FC<{ selectedUser?: any }> = ({ selectedUser }) => {
    //   console.log(selectedUser);
    // const navigate = useNavigate();
    const [userDatas, setuserDatas] = useState({
        profilePhoto: "",
        userid: "",
        username: "",
        contactNumber: "",
        dateOfBirth: "",
        icNumber: "",
        email: "",
        address: "",
        gender: "",
    });

    // const localData = () => {
    //     const myLocalData = [
    //         userDatas.profilePhoto,
    //         userDatas.userid,
    //         userDatas.username,
    //         userDatas.contactNumber,
    //         userDatas.dateOfBirth,
    //         userDatas.icNumber,
    //         userDatas.email,
    //         userDatas.address,
    //         userDatas.gender,
    //     ];
    //     return myLocalData;
    // };
    // const result = localData();
    //   console.log(result);

    const userData = useLocation();
    //   console.log(userData, "userData");
    //   console.log(userData.state);

    const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
    const [userid, setuserid] = useState(selectedUser?.userid || "");
    const [username, setUsername] = useState(selectedUser?.username || "");
    const [contactNumber, setContactNumber] = useState(
        selectedUser?.contactNumber || ""
    );
    const [dateOfBirth, setDateOfBirth] = useState(
        selectedUser?.dateOfBirth || ""
    );
    const [icNumber, setIcNumber] = useState(selectedUser?.icNumber || "");
    const [email, setEmail] = useState(selectedUser?.email || "");
    const [address, setAddress] = useState(selectedUser?.address || "");
    const [gender, setGender] = useState(selectedUser?.gender || "");
    const [isEditMode, setIsEditMode] = useState(false);

    const handleSaveButtonClick = () => {
        const storedUserData = JSON.parse(
            localStorage.getItem("userList") || "{}"
        );

        const editedUserData = {
            profilePhoto: profilePhoto
                ? URL.createObjectURL(profilePhoto)
                : storedUserData.profilePhoto || "",
            userid,
            username,
            contactNumber,
            dateOfBirth,
            icNumber,
            email,
            address,
            gender,
        };

        const cloneExistingUser = [...storedUserData];
        const foundExistingUserIndex = cloneExistingUser.findIndex(
            (userObj) => {
                // return the index of element if exist, return -1 if element not exist
                return userObj.userid === editedUserData.userid;
            }
        );
        //found existing user
        if (foundExistingUserIndex >= 0) {
            // perform update action
            const selectedExistUser = cloneExistingUser[foundExistingUserIndex];
            selectedExistUser.username = editedUserData.username;
            selectedExistUser.contactNumber = editedUserData.contactNumber;
            selectedExistUser.dateOfBirth = editedUserData.dateOfBirth;
            selectedExistUser.icNumber = editedUserData.icNumber;
            selectedExistUser.email = editedUserData.email;
            selectedExistUser.address = editedUserData.address;
            selectedExistUser.gender = editedUserData.gender;
            cloneExistingUser[foundExistingUserIndex] = selectedExistUser;

            // update local storage's userList
            console.log(cloneExistingUser)
            localStorage.setItem("userList", JSON.stringify(cloneExistingUser));
        } else {
            // perform add action
            const updatedUserData = {
                ...storedUserData,
                ...editedUserData,
            };
            localStorage.setItem("userList", JSON.stringify(updatedUserData));
            // console.log("finished adding user");
        }
        // setuserDatas(updatedUserData);
        setIsEditMode(false);
        window.alert("Profile information updated successfully");
    };

    useEffect(() => {
        setProfilePhoto(userData.state.profilePhoto || "");
        setuserid(userData.state.userid || "");
        setUsername(userData.state.username || "");
        setContactNumber(userData.state.contactNumber || "");
        setDateOfBirth(userData.state.dateOfBirth || "");
        setIcNumber(userData.state.icNumber || "");
        setEmail(userData.state.email || "");
        setAddress(userData.state.address || "");
        setGender(userData.state.gender || "");
    }, []);

    return (
        <Container maxWidth="sm">
            <div className="profileTextBox">
                <TextField
                    id="standard-basic"
                    className="useridTextBox"
                    label="User ID :"
                    variant="standard"
                    required
                    value={userid}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setuserid(e.target.value)
                    }
                    disabled={!isEditMode}
                    InputProps={{
                        readOnly: true,
                        style: { display: "none" },
                    }}
                />
                <br></br>

                <TextField
                    id="standard-basic"
                    className="nameTextBox"
                    label="Username :"
                    variant="standard"
                    required
                    value={username}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                    disabled={!isEditMode}
                />
                <br></br>

                <TextField
                    id="standard-basic"
                    className="contactTextBox"
                    label="Contact number :"
                    variant="standard"
                    required
                    value={contactNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setContactNumber(e.target.value)
                    }
                    disabled={!isEditMode}
                />
                <br></br>

                <TextField
                    id="standard-basic"
                    className="dobTextBox"
                    label="DOB :"
                    variant="standard"
                    required
                    value={dateOfBirth}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDateOfBirth(e.target.value)
                    }
                    disabled={!isEditMode}
                />

                <br></br>
                <TextField
                    id="standard-basic"
                    className="icTextBox"
                    label="IC number :"
                    variant="standard"
                    required
                    value={icNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setIcNumber(e.target.value)
                    }
                    disabled={!isEditMode}
                />
                <br></br>

                <TextField
                    id="standard-basic"
                    className="emailTextBox"
                    label="Email :"
                    variant="standard"
                    required
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    disabled={!isEditMode}
                />
                <br></br>

                <TextField
                    id="standard-basic"
                    className="addressTextBox"
                    label="House Address:"
                    variant="standard"
                    required
                    value={address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setAddress(e.target.value)
                    }
                    disabled={!isEditMode}
                />
            </div>
            <br></br>

            <div>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        name="radio-buttons-group"
                    >
                        <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Female"
                            disabled={!isEditMode}
                        />
                        <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="Male"
                            disabled={!isEditMode}
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <br />

            {!isEditMode ? (
                <Button variant="contained" onClick={() => setIsEditMode(true)}>
                    Edit
                </Button>
            ) : (
                <Button variant="contained" onClick={handleSaveButtonClick}>
                    Save
                </Button>
            )}
        </Container>
    );
};

export default EditMyProfile;
