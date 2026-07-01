import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ixdgdmwvarftkmopflza.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4ZGdkbXd2YXJmdGttb3BmbHphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4OTgzNDYsImV4cCI6MjA5ODQ3NDM0Nn0.bqZwrn4pbgdaoifAt4yLvxRzv2J8Rs-8yj_u-RH5Lhs'
)