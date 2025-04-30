import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RequestQuoteForm() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="border-2 rounded-md p-6">
        <h2 className="text-2xl font-bold mb-6">Request Quote Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input placeholder="Name" className="w-full" />
          </div>
          <div>
            <Input placeholder="Email" type="email" className="w-full" />
          </div>
          <div>
            <Input placeholder="Phone number" type="tel" className="w-full" />
          </div>
          <div>
            <Input placeholder="Organization" className="w-full" />
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Service" className="w-full" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consulting">Internet Access</SelectItem>
                <SelectItem value="development">Network Security</SelectItem>
                <SelectItem value="design">Full Infrastructure</SelectItem>
                <SelectItem value="marketing">Consultancy</SelectItem>
                <SelectItem value="other">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Community" className="w-full"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="nonprofit">Non-profit</SelectItem>
                <SelectItem value="government">Government</SelectItem>
                <SelectItem value="other">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6">
          <Textarea placeholder="Additional information" className="w-full min-h-[150px]" />
        </div>

        <div className="mt-6">
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8">Send</Button>
        </div>
      </div>
    </div>
  )
}
