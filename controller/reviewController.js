import reviewModel from "../models/reveiw.js";

export async function addReview(req, res) {
  if (!req.user) {
    return res.status(401).json({ message: "please login & try again" });
  }

  try {
    const data = req.body;

    // overwrite with user info
    data.name = `${req.user.firstName} ${req.user.lastName}`;
    data.email = req.user.email;
    data. profilePicture = req.user. profilePicture;

    const newReview = new reviewModel(data);
    await newReview.save();

    res.json({ message: "review added successfully" });
  } catch (err) {
    console.error("Review save error:", err.message); // 👈 log reason
    res.status(400).json({
      message: "review addition failed",
      error: err.message,
    });
  }
}


export function getReviews(req,res)
{
    const user = req.user
if(user==null || user.role!= "admin")
{
    reveiwModel.find({isApproved : true}).then((reviews)=>{
        res.json(reviews)
    })

return
}
//return

if(user.role == "admin")
{
    reveiwModel.find().then((reviews)=>{
        res.json(reviews)
    })
}

}

