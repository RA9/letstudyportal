"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { getAdmissionInfo, updateAdmissionInfo } from "@/app/actions"

const formSchema = z.object({
  admissionInfo: z.string().min(1, "Admission information is required"),
})

export function AdmissionTab({ schoolId }: { schoolId: string }) {
  const [isEditing, setIsEditing] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: async () => {
      const info = await getAdmissionInfo(schoolId)
      return { admissionInfo: info || "" }
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await updateAdmissionInfo(schoolId, values.admissionInfo)
      setIsEditing(false)
      toast({
        title: "Success",
        description: "Admission information updated successfully",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update admission information",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="space-y-4">
      {!isEditing ? (
        <>
          <h2 className="text-xl font-semibold">Admission Information</h2>
          <p>{form.getValues("admissionInfo") || "No admission information available."}</p>
          <Button onClick={() => setIsEditing(true)}>
            {form.getValues("admissionInfo") ? "Update" : "Add"} Admission Info
          </Button>
        </>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="admissionInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Admission Information</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex space-x-2">
              <Button type="submit">Save</Button>
              <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}

