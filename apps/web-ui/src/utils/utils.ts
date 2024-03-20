export const formatTime = (minutes: number, seconds: number) => {
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds
  return `${formattedMinutes}:${formattedSeconds}`
}