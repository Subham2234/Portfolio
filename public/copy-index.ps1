$src = Join-Path $PSScriptRoot 'index(actual)3.html'
$dst = Join-Path $PSScriptRoot 'index.html'
Copy-Item -LiteralPath $src -Destination $dst -Force
Write-Output "Copied. Lines: $((Get-Content -LiteralPath $dst).Count)"
