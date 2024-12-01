import { notFound } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { getSchoolById } from "@/app/actions"
import { AboutTab } from "@/components/school-details/about-tab"
import { AdmissionTab } from "@/components/school-details/admission-tab"
import { ProgramsTab } from "@/components/school-details/programs-tab"

export default async function SchoolDetailsPage({ params }: { params: { slug: string } }) {
  const school = await getSchoolById(params.slug)

  if (!school) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{school.name}</h1>
      <Tabs defaultValue="about" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="admission">Admission</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <AboutTab school={school} />
        </TabsContent>
        <TabsContent value="admission">
          <AdmissionTab schoolId={school.id} />
        </TabsContent>
        <TabsContent value="programs">
          <ProgramsTab schoolId={school.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

