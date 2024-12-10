import { Button } from '@/components/ui'

export const Main = () => {
  return (
    <div className="container-custom">
      <h1 className="text-2xl font-bold "> Hey, I’m Nick</h1>
      <p className="text-sm font-normal text-grey-dark mb-[38px] loading-normal">
        Frontend developer
      </p>

      <p className="text-sm font-normal text-grey-dark before-element pt-6 mb-[27px] ">
        Help you to create high-quality digital products that your clients will love and let your
        business thrive
      </p>
      <Button title="Get in touch" isDisabled={false} />
    </div>
  )
}
