import { useState } from "react";
import ShieldIcon from "@mui/icons-material/Shield";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "../components/ui/dialog";
import Navbar from "../components/Navbar";

export default function ReferenceForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    membershipStatus: false,
    acquaintanceDuration: "",
    relationship: "",
    applicantQualifications: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#1e1d2a]">
      <Navbar />
      <div className="p-4 sm:p-6 md:p-8 flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto bg-[#252736] rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Left side */}
            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 leading-tight">
                Your Referral Can Help Us <span className="text-[#fb4359]">Grow!</span>
              </h2>
              <p className="text-lg text-center mb-12 text-gray-300 max-w-md">
                Strengthen the Whitetulip Family by referring qualified members.
              </p>
              <div className="w-full max-w-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/20 - Different types of marketing.png" 
                  alt="Referral Illustration" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Right side */}
            <div className="lg:w-1/2 p-6 md:p-8 lg:p-12">
              <div className="max-w-md mx-auto bg-white rounded-xl p-8 shadow-lg">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold mb-8 text-gray-800">Whitetulip Reference Form</h2>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full mb-8 bg-[#fb4359] text-white py-4 px-6 rounded-lg hover:bg-[#e13347] transition-all hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center gap-2 font-medium">
                          <ShieldIcon fontSize="small" /> Check Reference Eligibility
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-white p-6 rounded-xl">
                        <DialogHeader className="text-2xl font-bold mb-4">Can You Be a Reference?</DialogHeader>
                        <div className="space-y-4">
                          <p className="text-gray-700">
                            Check if you meet the criteria to serve as a reference for an applicant and contribute to the Whitetulip community.
                          </p>
                          <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                              <span>✔️</span> Must be an active Whitetulip member
                            </li>
                            <li className="flex items-center gap-2">
                              <span>🤝</span> Must have a genuine personal connection
                            </li>
                            <li className="flex items-center gap-2">
                              <span>👥</span> Must have in-person interactions
                            </li>
                            <li className="flex items-center gap-2">
                              <span>🚫</span> Online-only connections do not qualify
                            </li>
                            <li className="flex items-center gap-2">
                              <span>⏳</span> Meaningful interactions are needed
                            </li>
                          </ul>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Your Full Name</label>
                        <Input 
                          name="fullName" 
                          placeholder="Enter your full name" 
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" 
                          value={formData.fullName} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Email Address</label>
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>

                      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                        <Checkbox 
                          id="membershipStatus"
                          name="membershipStatus" 
                          checked={formData.membershipStatus} 
                          onCheckedChange={(checked) => 
                            setFormData(prev => ({ ...prev, membershipStatus: checked }))
                          }
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <label htmlFor="membershipStatus" className="text-gray-600 text-sm">
                          I confirm that I am an active Whitetulip member
                        </label>
                      </div>

                      <Input 
                        name="acquaintanceDuration" 
                        placeholder="How long have you known the applicant?" 
                        className="w-full p-4 border border-gray-200 rounded-lg text-lg" 
                        value={formData.acquaintanceDuration} 
                        onChange={handleChange} 
                        required 
                      />

                      <Input 
                        name="relationship" 
                        placeholder="Describe your relationship with the applicant" 
                        className="w-full p-4 border border-gray-200 rounded-lg text-lg" 
                        value={formData.relationship} 
                        onChange={handleChange} 
                        required 
                      />

                      <Textarea 
                        name="applicantQualifications" 
                        placeholder="Describe the applicant's qualifications, character, and values" 
                        className="w-full p-4 border border-gray-200 rounded-lg min-h-[120px] text-lg" 
                        value={formData.applicantQualifications} 
                        onChange={handleChange} 
                        required 
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-[#4169e1] text-white py-4 rounded-lg hover:bg-[#3154c4] transition-all hover:shadow-lg transform hover:scale-[1.02] text-base font-semibold mt-8"
                      >
                        Submit Reference
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-16 px-4">
                    <div className="mb-6 text-green-500">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Reference Submitted!</h2>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for submitting your reference. We appreciate your contribution to the Whitetulip community.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
