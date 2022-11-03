export default function HideIcon({ ishidden }) {

  if (ishidden) {
    return (
      <svg className="hide" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267 267" width="267" height="267" fill="none">
        <path fill="#707070" d="M133 267a133 133 0 1 0 0-267 133 133 0 0 0 0 267Z" />
        <path fill="#303030" d="m257 182-40-48s-59 51-83 51-84-51-84-51l92 132c53-3 97-37 115-84Z" />
        <path fill="#EBF0F3" stroke="#707070" strokeWidth="0" d="M133 192c-37 0-70-24-82-59 12-34 45-59 82-59 38 0 70 25 83 59a89 89 0 0 1-83 59Z" />
        <path className="iris" fill="#707070" fillRule="evenodd" d="M134 175c-21 0-38-18-38-41 0-22 17-40 38-40s38 18 38 40c0 23-17 41-38 41Zm0-65c-13 0-23 11-23 24 0 14 10 24 23 24s23-10 23-24c0-13-10-24-23-24Z" clipRule="evenodd" />
        <path className="line" fill="#ff0000" fillRule="evenodd" stroke="#707070" strokeLinecap="round" strokeWidth="0" d="M45 82c2-4 9-6 13-3l160 92a10 10 0 1 1-10 17L48 96c-4-3-6-9-3-14Z" clipRule="evenodd" />
      </svg>
    )
  }
  return (
    <svg className="hide" xmlns="http://www.w3.org/2000/svg" width="268" height="267" viewBox="0 0 268 267" fill="none">
      <path fill="#59A642" d="M134 267a133 133 0 1 0 0-267 133 133 0 0 0 0 267Z" />
      <path isHidden="true" fill="#305C22" d="m258 182-40-48s-59 51-83 51-85-51-85-51l93 132c53-3 96-37 115-84Z" />
      <path className="eye" fill="#EBF0F3" d="M134 73c-38 0-71 25-84 60 13 36 46 61 84 61s71-25 84-61a90 90 0 0 0-84-60Z" />
      <path className="iris" fill="#59A642" fillRule="evenodd" d="M134 175c-21 0-38-18-38-41 0-22 17-40 38-40s38 18 38 40c0 23-17 41-38 41Zm0-65c-13 0-23 11-23 24 0 14 10 24 23 24s23-10 23-24c0-13-10-24-23-24Z" clipRule="evenodd" />
    </svg>
  )
}