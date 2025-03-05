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
    solemRecommendation: false,
    whyWhitetulip: "",
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

                    <div className="max-h-[500px] overflow-y-auto pr-2">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information Section */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-700">Your Information</h3>
                          <div className="space-y-3">
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
                          </div>
                        </div>

                        {/* Membership & Recommendation Section */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-700">Membership & Recommendation</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100">
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

                            <div className="flex items-center gap-2 bg-white p-3 rounded-lg border border-gray-100">
                              <Checkbox 
                                id="solemRecommendation"
                                name="solemRecommendation" 
                                checked={formData.solemRecommendation} 
                                onCheckedChange={(checked) => 
                                  setFormData(prev => ({ ...prev, solemRecommendation: checked }))
                                }
                                className="h-4 w-4 rounded border-gray-300"
                              />
                              <label htmlFor="solemRecommendation" className="text-gray-600 text-sm">
                                Do you solemnly and wholeheartedly recommend this individual for Whitetulip membership without any reservations?
                              </label>
                            </div>
                          </div>
                        </div>

                        {/* Relationship Section */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-700">Your Relationship with the Applicant</h3>
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700">How long have you known the applicant?</label>
                              <Input 
                                name="acquaintanceDuration" 
                                placeholder="e.g., 3 years, 6 months" 
                                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" 
                                value={formData.acquaintanceDuration} 
                                onChange={handleChange} 
                                required 
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700">Describe your relationship with the applicant</label>
                              <Input 
                                name="relationship" 
                                placeholder="e.g., Colleague, Friend, Mentor" 
                                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 transition-all" 
                                value={formData.relationship} 
                                onChange={handleChange} 
                                required 
                              />
                            </div>
                          </div>
                        </div>

                        {/* Qualifications Section */}
                        <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
                          <h3 className="font-medium text-gray-700">Applicant Qualifications</h3>
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700">Describe the applicant's qualifications, character, and values</label>
                              <Textarea 
                                name="applicantQualifications" 
                                placeholder="Please provide details about the applicant's character, skills, and how they align with Whitetulip values" 
                                className="w-full p-3 border border-gray-200 rounded-lg min-h-[100px] focus:ring-2 focus:ring-blue-500 transition-all" 
                                value={formData.applicantQualifications} 
                                onChange={handleChange} 
                                required 
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-gray-700">Why do you believe this individual should become a Whitetulip member?</label>
                              <Textarea 
                                name="whyWhitetulip" 
                                placeholder="Explain why you think this person would be a valuable addition to the Whitetulip community" 
                                className="w-full p-3 border border-gray-200 rounded-lg min-h-[100px] focus:ring-2 focus:ring-blue-500 transition-all" 
                                value={formData.whyWhitetulip} 
                                onChange={handleChange} 
                                required 
                              />
                            </div>
                          </div>
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-[#4169e1] text-white py-4 rounded-lg hover:bg-[#3154c4] transition-all hover:shadow-lg transform hover:scale-[1.02] text-base font-semibold mt-8"
                        >
                          Submit Reference
                        </Button>
                      </form>
                    </div>
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
