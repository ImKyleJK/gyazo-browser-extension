export default async () => {
  const endpoint = 'https://gyazo.com/user/teams'
  const response = await fetch(endpoint, {
    credentials: 'include'
  })
  if (response.status === 403) {
    alert(chrome.i18n.getMessage('requireLoginTeams'))
    chrome.tabs.create({url: 'https://gyazo.com/teams/login'})
    return [{}]
  }
  const teams = await response.json()
  return teams
}
