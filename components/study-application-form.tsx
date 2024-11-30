import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ApplicationForm() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left column with image */}
        <div className="lg:w-1/2 relative h-full lg:h-screen">
          <Image
            src="/sch-1.jpg?height=1080&width=1080"
            alt="Students studying"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Right column with form */}
        <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h1 className="text-xl font-semibold text-blue-600">Let&apos;s Study</h1>
            </div>

            <div>
              <h2 className="text-2xl font-bold">Application Form</h2>
              <p className="text-sm text-muted-foreground">Study Smart, move forward</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Full Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Email Address" required />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course">Select Course</Label>
                  <Select>
                    <SelectTrigger id="course">
                      <SelectValue placeholder="Select Course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="business">Business Administration</SelectItem>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="arts">Liberal Arts</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="previousEducation">Previous Education</Label>
                  <Input id="previousEducation" placeholder="Previous Education" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="previousSchool">Previous School</Label>
                  <Input id="previousSchool" placeholder="Previous School" required />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="documents">Upload documents</Label>
                  <Input
                    id="documents"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">Upload relevant documents (transcripts, certificates, etc.)</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="statement">Personal Statement/Essay (Optional)</Label>
                  <Textarea
                    id="statement"
                    placeholder="Write your personal statement here..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

