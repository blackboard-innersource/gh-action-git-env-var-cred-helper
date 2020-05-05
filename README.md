# Git Environment Variable Credential Helper GitHub Action

This action configures git to use environment variables values as a means of authenticating with a git provider instead of writing credentials to disk or use of some other insecure means. The following environment variables from secrets can then be used in any step or job on the runner to source git credentials from.

| Environment Variable Name | Description |
| `GIT_USER` | Username of the git user to use to authenticate with the git provider. |
| `GIT_PASS` | Password of the git user to use to authenticate with the git provider. |

## Example Usage

```yaml
uses: blackboard-innersource/gh-action-git-env-var-cred-helper@master
```
