import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

const KycForm = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full" />
          </div>
          <CardTitle className="text-2xl font-semibold">KYC Verification</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="dob">Date of birth*</Label>
            <Input
              type="date"
              id="dob"
              placeholder="Date of birth"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="nationality">Nationality*</Label>
            <Input
              type="text"
              id="nationality"
              placeholder="Nationality"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="id-type">Government issued ID Type*</Label>
            <div className="relative">
              <Input
                type="text"
                id="id-type"
                placeholder="Select ID type"
                required
              />
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-0 top-0"
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="id-number">Government issued ID number*</Label>
            <Input
              type="text"
              id="id-number"
              placeholder="Enter ID number"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="upload-id">Upload ID Document*</Label>
            <div className="relative">
              <Input
                type="text"
                id="upload-id"
                placeholder="Upload document"
                required
              />
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-0 top-0"
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="issue-date">Date of Issue</Label>
            <Input
              type="date"
              id="issue-date"
              placeholder="Date of issue"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expiry-date">Date of Expiry</Label>
            <Input
              type="date"
              id="expiry-date"
              placeholder="Date of expiry"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Residential Address</Label>
            <Input
              type="text"
              id="address"
              placeholder="Enter address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="proof-address">Upload Proof of Address</Label>
            <div className="relative">
              <Input
                type="text"
                id="proof-address"
                placeholder="Upload document"
              />
              <Button 
                variant="ghost" 
                size="icon"
                className="absolute right-0 top-0"
              >
                <Upload className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Verification Notes</Label>
            <Input
              type="text"
              id="notes"
              placeholder="Optional"
            />
          </div>
        </form>

        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" className="w-32">Cancel</Button>
          <Button className="w-32 bg-blue-600 hover:bg-blue-700">Submit Kyc</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KycForm;