const path = require('path');
// handling and manipulating file a 

const hotel = require('../model/Hotel');
const fs = require('fs');



exports.getAllHotels = async(req, res) => {
    try
    {
        const hotels = await hotel.find()
        res.json(hotels);

        
    } catch (error) 
    {
        console.error(error.message);
        res.status(500).send('Server Error');
        
    }
};

// function to add a new hotel

exports.addHotel = async(req, res) => {
    const { hotelName } = req.body;
    const hotelImage = req.file ? req.file.filename.trim() : "";


    try 
    {
        const newHotel = new hotel({
            hotelName,
            hotelImage,

        });

        const hotel2 = await newHotel.save();
        res.json(hotel2);
    } catch (error) 
    {
        console.error(error.message);
        res.status(500).send('Server Error');
    }

};

// funstion to delete a hotel
exports.deleteHotel = async (req, res) => {
    try 
    {
        console.log(`Attempting to delete hotel with id: ${req.params.id}`);
        const hotel3 = await hotel.findById(req.params.id);

        if(!hotel3) 
        {
            console.log('Hotel not found');
            return res.status(404).json({ msg: 'Hotel not found' });
        }

        // Delete image file if exists
        if(hotel3.hotelImage)
        {
            try 
            {
                const imagePath = path.join(__dirname, '..', 'uploads', hotel3.hotelImage);
                console.log(`Deleting image: ${imagePath}`);
                fs.unlinkSync(imagePath);
                console.log(`Image ${hotel3.hotelImage} deleted successfully`);
            } 
            catch (error)
            {
                // ENOENT: Error indicating that the file does not exist
                if(error.code === 'ENOENT')
                {
                    console.log(`Image ${hotel3.hotelImage} not found, skipping deletion`);
                }
                else
                {
                    console.error(`Error deleting image ${hotel3.hotelImage} :`, error.message);
                    return res.status(500).json({ msg: 'Error deleting image' });
                }
            }
        }

         await hotel.deleteOne({_id: req.params.id }); 
        //  use deleteOne method
        console.log(`Hotel with id: ${req.params.id} deleted successfully`);
        res.json({ msg: 'Hotel removed' });
    } 
    catch (error) 
    {
        console.error('Error removing hotel:', error.message);
        res.status(500).send('Server Error');
    }
};